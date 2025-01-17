import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Ingress, { IngressRule } from '../../lib/k8s/ingress';
import { useSettings } from '../App/Settings/hook';
import LabelListItem from '../common/LabelListItem';
import { DetailsGrid } from '../common/Resource';
import { SectionBox } from '../common/SectionBox';
import SimpleTable from '../common/SimpleTable';

export default function IngressDetails() {
  const { namespace, name } = useParams<{ namespace: string; name: string }>();
  const { t } = useTranslation('glossary');
  const storeRowsPerPageOptions = useSettings('tableRowsPerPageOptions');

  function getPorts(item: Ingress) {
    const ports: number[] = [];
    item.getRules().forEach(rule => {
      rule.http.paths.forEach(path => {
        ports.push(path.backend.service.port.number);
      });
    });

    if (!!item.spec?.tls) {
      ports.push(443);
    }

    return ports.sort((a, b) => a - b);
  }

  function getDefaultBackend(item: Ingress) {
    const { service, resource } = item.spec?.defaultBackend || {};
    return (
      (service && service.name + ':' + service.port.toString()) ||
      (resource && resource.kind + '/' + resource.name) ||
      '-'
    );
  }

  return (
    <DetailsGrid
      resourceType={Ingress}
      name={name}
      namespace={namespace}
      withEvents
      extraInfo={ingress =>
        ingress && [
          {
            name: t('Default Backend'),
            value: getDefaultBackend(ingress),
          },
          {
            name: t('Ports'),
            value: getPorts(ingress).join(', '),
          },
          {
            name: 'TLS',
            value: (
              <LabelListItem
                labels={ingress.spec?.tls?.map(
                  (tls: { hosts: string[]; secretName: string }) =>
                    `${tls.secretName} 🞂 ${tls.hosts.join(', ')}`
                )}
              />
            ),
          },
        ]
      }
      sectionsFunc={item => (
        <>
          <SectionBox title={t('Rules')}>
            <SimpleTable
              rowsPerPage={storeRowsPerPageOptions}
              emptyMessage={t('ingress|No rules data to be shown.')}
              columns={[
                {
                  label: t('Host'),
                  getter: (data: IngressRule) => data.host || '*',
                },
                {
                  label: t('Path'),
                  getter: (data: IngressRule) => data.http.paths.map(({ path }) => path).join(', '),
                },
                {
                  label: t('Backends'),
                  getter: (data: IngressRule) => (
                    <LabelListItem
                      labels={data.http.paths.map(({ backend }) =>
                        backend.service.name
                          ? backend.service.name + ':' + backend.service.port.number.toString()
                          : backend.service.port.number.toString()
                      )}
                    />
                  ),
                },
              ]}
              data={item?.getRules() || []}
              reflectInURL="rules"
            />
          </SectionBox>
        </>
      )}
    />
  );
}
