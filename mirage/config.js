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

  this.get('occupancy.php', (schema, request) => {
    const dataPoints = [
      { on: '2020-08-06T15:15:03+00:00', occupancy: 1 },
      { on: '2020-08-06T15:19:56+00:00', occupancy: 1 },
      { on: '2020-08-06T15:31:01+00:00', occupancy: 2 },
      { on: '2020-08-06T15:34:47+00:00', occupancy: 1 },
      { on: '2020-08-06T15:43:42+00:00', occupancy: 1 },
      { on: '2020-08-06T15:45:16+00:00', occupancy: 2 },
      { on: '2020-08-06T16:00:20+00:00', occupancy: 3 },
      { on: '2020-08-06T16:15:23+00:00', occupancy: 4 },
    ];

    return JSON.stringify(dataPoints);
  });

  this.passthrough('/members/**');
  this.passthrough('/sections/**');
  this.passthrough('/contact-form.php');
  if (ENV['environment'] !== 'production') {
    this.passthrough('/occupancy.php');
  }
}
