import app from 'flarum/admin/app';
import FilterSettingsPage from './components/FilterSettingsPage';

app.initializers.add('hamcq-filter-plus', () => {
  app.extensionData
    .for('hamcq-filter-plus')
    .registerPage(FilterSettingsPage)
    .registerPermission(
      {
        icon: 'fas fa-user-ninja',
        label: app.translator.trans('fof-filter.admin.permission.bypass_filter_label'),
        permission: 'discussion.bypassFoFFilter',
      },
      'reply'
    );
});
