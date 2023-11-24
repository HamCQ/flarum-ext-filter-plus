// import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/components/ExtensionPage';
// import type Mithril from 'mithril';

export default class FilterSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
  }

  content() {
    return (
      <div className="FilterSettingsPage">
        <div className="container">
          <form>
            <h2>{app.translator.trans('fof-filter.admin.title')}</h2>
            {this.buildSettingComponent({
              type: 'textarea',
              rows: 6,
              setting: 'fof-filter.words',
              label: app.translator.trans('fof-filter.admin.filter_label'),
              placeholder: app.translator.trans('fof-filter.admin.input.placeholder'),
              help: app.translator.trans('fof-filter.admin.bad_words_help'),
            })}
            <hr />
            <h2>{app.translator.trans('fof-filter.admin.auto_merge_title')}</h2>
            {this.buildSettingComponent({
              type: 'boolean',
              setting: 'fof-filter.autoMergePosts',
              label: app.translator.trans('fof-filter.admin.input.switch.merge'),
            })}
            {this.buildSettingComponent({
              type: 'number',
              setting: 'fof-filter.cooldown',
              label: app.translator.trans('fof-filter.admin.cooldownLabel'),
              help: app.translator.trans('fof-filter.admin.help2'),
              min: 0,
            })}
            <hr />
            <h2>{app.translator.trans('fof-filter.admin.input.email_label')}</h2>
            {this.buildSettingComponent({
              type: 'string',
              setting: 'fof-filter.flaggedSubject',
              label: app.translator.trans('fof-filter.admin.input.email_subject'),
              placeholder: app.translator.trans('fof-filter.admin.email.default_subject'),
            })}
            {this.buildSettingComponent({
              type: 'textarea',
              rows: 4,
              setting: 'fof-filter.flaggedEmail',
              label: app.translator.trans('fof-filter.admin.input.email_body'),
              help: app.translator.trans('fof-filter.admin.email_help'),
              placeholder: app.translator.trans('fof-filter.admin.email.default_text'),
            })}
            {this.buildSettingComponent({
              type: 'boolean',
              setting: 'fof-filter.emailWhenFlagged',
              label: app.translator.trans('fof-filter.admin.input.switch.email'),
            })}
            <hr/>
            <h2>阿里云内容安全检测</h2>
            {this.buildSettingComponent({
              type: 'boolean',
              setting: 'hamcq-filter.aliyun-content-check',
              label: "开启阿里云内容安全检测",
            })}
            {this.buildSettingComponent({
              type: 'string',
              setting: 'hamcq-filter.aliyun-content-check.access_id',
              label: "ALIBABA_CLOUD_ACCESS_KEY_ID"
            })}
            {this.buildSettingComponent({
              type: 'string',
              setting: 'hamcq-filter.aliyun-content-check.access_sec',
              label: "ALIBABA_CLOUD_ACCESS_KEY_SECRET",
            })}
            {this.buildSettingComponent({
              type: 'string',
              setting: 'hamcq-filter.aliyun-content-check.skip_label',
              label: "SKIP_LABEL",
              help: "like ad,nonsense ......",
            })}
            <hr />
            {this.submitButton()}
          </form>
        </div>
      </div>
    );
  }
}
