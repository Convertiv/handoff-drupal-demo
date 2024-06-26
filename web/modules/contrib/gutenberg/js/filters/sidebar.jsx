(wp => {
  const { element, plugins, editPost, data } = wp;
  const { dispatch, select } = data;
  const { useRef, useEffect } = element;
  const { registerPlugin } = plugins;
  const { PluginDocumentSettingPanel } = editPost;

  const FormPanel = () => {
    const ref = useRef(null);

    useEffect(() => {
      const editAdvanced = document.getElementById('edit-advanced');
      const sidebar = document.getElementById('gutenberg-sidebar');

      if (editAdvanced) {
        ref.current.appendChild(editAdvanced);
      }

      return () => {
        if (editAdvanced && sidebar) {
          sidebar.appendChild(editAdvanced);
        }
      };
    }, []);

    return <div ref={ref} />;
  };

  const NodeDocumentSettings = () => (
    <PluginDocumentSettingPanel
      name="panel"
      className="node-settings-plugin"
      title="Node"
    >
      <FormPanel />
    </PluginDocumentSettingPanel>
  );

  registerPlugin('node-document-settings', {
    render: NodeDocumentSettings,
    icon: null,
  });

  // Something "fishy" about PluginDocumentSettingPanel component:
  // opened prop doesn't work;
  // the plugin is registered as node-document-settings/panel;
  // https://github.com/WordPress/gutenberg/issues/22049
  const isOpened = select('core/edit-post').isEditorPanelOpened(
    'node-document-settings/panel',
  );

  if (!isOpened) {
    dispatch('core/edit-post').toggleEditorPanelOpened(
      'node-document-settings/panel',
    );
  }
})(wp, Drupal);
