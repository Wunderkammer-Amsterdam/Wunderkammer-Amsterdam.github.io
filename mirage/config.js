import ENV from 'wonderkamer/config/environment';

export default function () {
  this.get('/members/:id', (schema, request) => {
    return schema.members.find(request.params.id);
  });
  this.get('/members', (schema, request) => {
    if (request.queryParams.slug) {
      return schema.members.where(request.queryParams);
    }

    return schema.members.all();
  });

  this.passthrough('/members/**');
  this.passthrough('/sections/**');
  this.passthrough('/contact-form.php');
}
