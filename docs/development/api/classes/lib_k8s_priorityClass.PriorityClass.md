---
title: "Class: PriorityClass"
linkTitle: "PriorityClass"
slug: "lib_k8s_priorityClass.PriorityClass"
---

[lib/k8s/priorityClass](../modules/lib_k8s_priorityClass.md).PriorityClass

## Hierarchy

- `any`

  ↳ **`PriorityClass`**

## Constructors

### constructor

• **new PriorityClass**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`KubePriorityClass`](../interfaces/lib_k8s_priorityClass.KubePriorityClass.md) |

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').constructor

#### Defined in

[lib/k8s/cluster.ts:107](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L107)

## Properties

### apiEndpoint

▪ `Static` **apiEndpoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `get` | (`name`: `string`, `cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<() => `void`\> |
| `isNamespaced` | `boolean` |
| `list` | (`cb`: [`StreamResultsCb`](../modules/lib_k8s_apiProxy.md#streamresultscb), `errCb`: [`StreamErrCb`](../modules/lib_k8s_apiProxy.md#streamerrcb), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<() => `void`\> |
| `patch` | (`body`: `OpPatch`[], `name`: `string`, `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `post` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |
| `put` | (`body`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md), `queryParams?`: [`QueryParameters`](../interfaces/lib_k8s_apiProxy.QueryParameters.md)) => `Promise`<`any`\> |

#### Defined in

[lib/k8s/priorityClass.ts:12](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L12)

___

### className

▪ `Static` **className**: `string`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').className

#### Defined in

[lib/k8s/cluster.ts:108](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L108)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClass.ts:30](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L30)

___

### globalDefault

• `get` **globalDefault**(): ``null`` \| `boolean`

#### Returns

``null`` \| `boolean`

#### Defined in

[lib/k8s/priorityClass.ts:26](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L26)

___

### preemptionPolicy

• `get` **preemptionPolicy**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClass.ts:34](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L34)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClass.ts:22](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L22)

___

### listRoute

• `Static` `get` **listRoute**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClass.ts:18](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L18)

___

### pluralName

• `Static` `get` **pluralName**(): `string`

#### Returns

`string`

#### Defined in

[lib/k8s/priorityClass.ts:14](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/priorityClass.ts#L14)

## Methods

### apiList

▸ `Static` **apiList**(`onList`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').apiList

#### Defined in

[lib/k8s/cluster.ts:87](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L87)

___

### getAuthorization

▸ `Static` `Optional` **getAuthorization**(`arg`, `resourceAttrs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `string` |
| `resourceAttrs?` | [`AuthRequestResourceAttrs`](../interfaces/lib_k8s_cluster.AuthRequestResourceAttrs.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').getAuthorization

#### Defined in

[lib/k8s/cluster.ts:110](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L110)

___

### getErrorMessage

▸ `Static` **getErrorMessage**(`err?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md) |

#### Returns

``null`` \| `string`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').getErrorMessage

#### Defined in

[lib/k8s/cluster.ts:106](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L106)

___

### useApiGet

▸ `Static` **useApiGet**(`onGet`, `name`, `namespace?`, `onError?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onGet` | (...`args`: `any`) => `void` |
| `name` | `string` |
| `namespace?` | `string` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |

#### Returns

`void`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').useApiGet

#### Defined in

[lib/k8s/cluster.ts:93](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L93)

___

### useApiList

▸ `Static` **useApiList**(`onList`, `onError?`, `opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').useApiList

#### Defined in

[lib/k8s/cluster.ts:88](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L88)

___

### useGet

▸ `Static` **useGet**(`name`, `namespace?`): [`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `namespace?` | `string` |

#### Returns

[`any`, ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`item`: `any`) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').useGet

#### Defined in

[lib/k8s/cluster.ts:102](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L102)

___

### useList

▸ `Static` **useList**(`opts?`): [`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

[`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubePriorityClass\>('priorityClass').useList

#### Defined in

[lib/k8s/cluster.ts:99](https://github.com/headlamp-k8s/headlamp/blob/1ae27053/frontend/src/lib/k8s/cluster.ts#L99)
