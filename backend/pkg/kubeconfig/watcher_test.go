package kubeconfig_test

/*
const clusterConf = `apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: dGVzdA==
    server: https://kubernetes.docker.internal:6443
  name: random-cluster-4
contexts:
- context:
    cluster: random-cluster-4
    user: random-cluster-4
  name: random-cluster-4
current-context: random-cluster-4
kind: Config
preferences: {}
users:
- name: random-cluster-4
  user:
    client-certificate-data: dGVzdA==
    client-key-data: dGVzdA==`

func TestWatchAndLoadKubeConfigFile(t *testing.T) {
	paths := []string{"./test_data/kubeconfig1", "./test_data/kubeconfig2", "./test_data/kubeconfig3"}

	var path string
	if runtime.GOOS == "windows" {
		path = strings.Join(paths, ";")
	} else {
		path = strings.Join(paths, ":")
	}

	kubeConfigStore := kubeconfig.NewContextStore()

	go kubeconfig.WatchAndLoadKubeConfigFile(path, kubeConfigStore)

	// create kubeconfig3 file that doesn't exist
	conf, err := clientcmd.Load([]byte(clusterConf))
	require.NoError(t, err)
	require.NotNil(t, conf)

	err = clientcmd.WriteToFile(*conf, "./test_data/kubeconfig3")
	require.NoError(t, err)

	t.Log("created kubeconfig3 file")

	// wait for watcher to reload kubeconfig files
	time.Sleep(20 * time.Second)

	// check if kubeconfig3 is loaded
	context, err := kubeConfigStore.GetContext("random-cluster-4")
	require.NoError(t, err)
	require.Equal(t, "random-cluster-4", context.Name)

	// delete kubeconfig3 file
	err = os.Remove("./test_data/kubeconfig3")
	require.NoError(t, err)
}
*/
