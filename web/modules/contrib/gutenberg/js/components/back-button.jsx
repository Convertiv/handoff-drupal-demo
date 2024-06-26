/* eslint func-names: ["error", "never"] */
(function(wp, Drupal, drupalSettings) {
  const { Button } = wp.components;
  const { t } = Drupal;

  function BackButton() {
    const icon = (
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        className="dashicon"
        viewBox="0 0 42.2 55.5"
      >
        <g id="Livello_2">
          <g id="Livello_1-2">
            <path
              d="M29.8,11.7C25.9,7.9,22.2,4.2,21.1,0c-1.1,4.2-4.8,7.9-8.7,11.7C6.6,17.5,0,24.1,0,34
              c-0.3,11.6,9,21.3,20.6,21.5s21.3-9,21.5-20.6c0-0.3,0-0.6,0-0.9C42.2,24.1,35.6,17.5,29.8,11.7z M10.8,35.9
              c-0.6,0.8-1.2,1.7-1.6,2.6c-0.1,0.1-0.2,0.3-0.4,0.3H8.7c-0.5,0-1-0.9-1-0.9l0,0c-0.1-0.2-0.3-0.5-0.4-0.7L7.2,37
              C5.9,34.2,7,30.3,7,30.3l0,0c0.5-1.9,1.4-3.8,2.5-5.4c0.7-1,1.5-2,2.3-3l1,1l4.7,4.8c0.2,0.2,0.2,0.5,0,0.7l-4.9,5.5l0,0
              L10.8,35.9z M21.3,49.7c-4,0-7.3-3.3-7.2-7.3c0-1.8,0.7-3.5,1.8-4.8c1.5-1.8,3.4-3.6,5.5-6c2.4,2.6,4,4.3,5.5,6.3
              c0.1,0.1,0.2,0.3,0.3,0.5c0.8,1.2,1.3,2.6,1.3,4.1C28.6,46.5,25.3,49.7,21.3,49.7C21.3,49.7,21.3,49.7,21.3,49.7z M35,38.1
              L35,38.1c-0.1,0.3-0.4,0.5-0.7,0.6h-0.1c-0.3-0.1-0.5-0.3-0.7-0.5l0,0c-1.3-1.9-2.7-3.7-4.3-5.3l-1.9-2l-6.4-6.6
              c-1.3-1.2-2.6-2.6-3.8-3.9c0-0.1-0.1-0.1-0.1-0.1c-0.2-0.3-0.4-0.6-0.5-1c0-0.1,0-0.1,0-0.2c-0.2-1.1,0.2-2.2,1-3
              c1.2-1.2,2.5-2.5,3.7-3.8c1.3,1.4,2.7,2.8,4.1,4.2l0,0c2.8,2.6,5.3,5.5,7.6,8.6c1.9,2.7,2.9,5.8,2.9,9.1
              C35.6,35.4,35.4,36.8,35,38.1z"
            />
          </g>
        </g>
      </svg>
    );

    // Define back URL
    const params = new URLSearchParams(window.location.search);
    let backUrl = `${drupalSettings.path.baseUrl}admin/content`;

    if (RegExp(/node\/\d+\/edit/g).test(drupalSettings.path.currentPath)) {
      backUrl =
        drupalSettings.path.baseUrl +
        drupalSettings.path.currentPath.replace('/edit', '');
    }

    backUrl = params.get('destination') || backUrl;

    return (
      <Button
        className="edit-post-fullscreen-mode-close drupal"
        icon={icon}
        iconSize={36}
        href={backUrl}
        label={t('Back')}
      />
    );
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.BackButton = <BackButton />;
})(wp, Drupal, drupalSettings);
