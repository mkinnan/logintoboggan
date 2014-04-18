/**
 * Implements hook_form_alter().
 */
function logintoboggan_form_alter(form, form_state, form_id) {
  try {
    if (form_id == 'user_login_form') {
      // If the login with e-mail setting is enabled, change the label on the
      // name field.
      if (
        typeof drupalgap.site_settings.logintoboggan_login_with_email !== 'undefined' &&
        drupalgap.site_settings.logintoboggan_login_with_email
      ) { form.elements['name'].title = 'Username or e-mail'; }
    }
  }
  catch (error) { console.log('logintoboggan_form_alter - ' + error); }
}

