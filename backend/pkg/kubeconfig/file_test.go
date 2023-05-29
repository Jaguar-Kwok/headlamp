package kubeconfig_test

/*
func TestWriteToFile(t *testing.T) {

	// create kubeconfig3 file that doesn't exist
	conf, err := clientcmd.Load([]byte(clusterConf))
	require.NoError(t, err)
	require.NotNil(t, conf)

	// write kubeconfig file
	err = kubeconfig.WriteToFile(*conf, "./test_data/")
	assert.NoError(t, err)

	// read kubeconfig file
	apiConf, err := clientcmd.LoadFromFile("./test_data/config")
	require.NoError(t, err)

	// check if the minikube context exists
	_, ok := apiConf.Contexts["random-cluster-4"]
	assert.True(t, ok)

	// delete temp kubeconfig file
	err = os.Remove("./test_data/config")
	require.NoError(t, err)
}

func TestRemoveContextFromFile(t *testing.T) {

	data, err := ioutil.ReadFile("./test_data/kubeconfig1")
	require.NoError(t, err)
	require.NotNil(t, data)

	err = ioutil.WriteFile("./test_data/config_copy", data, 0644)
	require.NoError(t, err)

	// remove context from kubeconfig file
	err = kubeconfig.RemoveContextFromFile("minikube", "./test_data/config_copy")
	assert.NoError(t, err)

	apiConf, err := clientcmd.LoadFromFile("./test_data/config_copy")
	require.NoError(t, err)

	// check if the minikube context exists
	_, ok := apiConf.Contexts["minikube"]
	assert.False(t, ok)

	// delete temp kubeconfig file
	err = os.Remove("./test_data/config_copy")
	require.NoError(t, err)
}
*/
