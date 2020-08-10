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
      { on: '2020-08-06T15:45:16+00:00', occupancy: 1 },
      { on: '2020-08-06T16:00:20+00:00', occupancy: 1 },
      { on: '2020-08-06T16:15:23+00:00', occupancy: 1 },
      { on: '2020-08-10T15:33:35+00:00', occupancy: 3 },
      { on: '2020-08-10T15:34:08+00:00', occupancy: 3 },
      { on: '2020-08-10T15:34:40+00:00', occupancy: 3 },
      { on: '2020-08-10T15:35:11+00:00', occupancy: 3 },
      { on: '2020-08-10T15:35:44+00:00', occupancy: 3 },
      { on: '2020-08-10T15:36:16+00:00', occupancy: 3 },
      { on: '2020-08-10T15:36:48+00:00', occupancy: 3 },
      { on: '2020-08-10T15:37:20+00:00', occupancy: 3 },
      { on: '2020-08-10T15:37:52+00:00', occupancy: 3 },
      { on: '2020-08-10T15:38:24+00:00', occupancy: 3 },
      { on: '2020-08-10T15:41:07+00:00', occupancy: 3 },
      { on: '2020-08-10T15:41:39+00:00', occupancy: 3 },
      { on: '2020-08-10T15:42:11+00:00', occupancy: 3 },
      { on: '2020-08-10T15:42:43+00:00', occupancy: 3 },
      { on: '2020-08-10T15:43:21+00:00', occupancy: 3 },
      { on: '2020-08-10T15:44:22+00:00', occupancy: 3 },
      { on: '2020-08-10T15:45:21+00:00', occupancy: 3 },
      { on: '2020-08-10T15:45:53+00:00', occupancy: 3 },
      { on: '2020-08-10T16:00:30+00:00', occupancy: 3 },
      { on: '2020-08-10T16:15:03+00:00', occupancy: 3 },
      { on: '2020-08-10T16:30:06+00:00', occupancy: 2 },
      { on: '2020-08-10T16:45:09+00:00', occupancy: 2 },
      { on: '2020-08-10T17:00:12+00:00', occupancy: 3 },
      { on: '2020-08-10T17:15:16+00:00', occupancy: 3 },
      { on: '2020-08-10T17:30:19+00:00', occupancy: 3 },
      { on: '2020-08-10T17:45:22+00:00', occupancy: 2 },
      { on: '2020-08-10T18:00:26+00:00', occupancy: 2 },
      { on: '2020-08-10T18:15:29+00:00', occupancy: 2 },
      { on: '2020-08-10T18:30:02+00:00', occupancy: 1 },
    ];

    return JSON.stringify(dataPoints);
  });

  this.passthrough('/members/**');
  this.passthrough('/sections/**');
  this.passthrough('/contact-form.php');

  if (ENV['environment'] === 'production') {
    this.passthrough('/occupancy.php');
  }
}
