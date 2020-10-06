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
      { on: '2020-08-10T18:45:05+00:00', occupancy: 2 },
      { on: '2020-08-10T19:00:10+00:00', occupancy: 2 },
      { on: '2020-08-10T19:15:13+00:00', occupancy: 2 },
      { on: '2020-08-10T19:30:17+00:00', occupancy: 2 },
      { on: '2020-08-10T19:45:20+00:00', occupancy: 2 },
      { on: '2020-08-10T20:00:24+00:00', occupancy: 2 },
      { on: '2020-08-10T20:15:27+00:00', occupancy: 2 },
      { on: '2020-08-10T20:30:30+00:00', occupancy: 2 },
      { on: '2020-08-10T20:45:03+00:00', occupancy: 2 },
      { on: '2020-08-10T21:00:06+00:00', occupancy: 2 },
      { on: '2020-08-10T21:15:10+00:00', occupancy: 2 },
      { on: '2020-08-10T21:30:13+00:00', occupancy: 2 },
      { on: '2020-08-10T21:45:16+00:00', occupancy: 1 },
      { on: '2020-08-10T22:00:19+00:00', occupancy: 1 },
      { on: '2020-08-10T22:15:22+00:00', occupancy: 1 },
      { on: '2020-08-10T22:30:26+00:00', occupancy: 1 },
      { on: '2020-08-10T22:45:29+00:00', occupancy: 1 },
      { on: '2020-08-10T23:00:32+00:00', occupancy: 1 },
      { on: '2020-08-10T23:15:05+00:00', occupancy: 1 },
      { on: '2020-08-10T23:30:08+00:00', occupancy: 1 },
      { on: '2020-08-10T23:45:11+00:00', occupancy: 1 },
      { on: '2020-08-11T00:00:14+00:00', occupancy: 1 },
      { on: '2020-08-11T00:15:17+00:00', occupancy: 1 },
      { on: '2020-08-11T00:30:21+00:00', occupancy: 1 },
      { on: '2020-08-11T00:45:24+00:00', occupancy: 1 },
      { on: '2020-08-11T01:00:27+00:00', occupancy: 1 },
      { on: '2020-08-11T01:15:30+00:00', occupancy: 1 },
      { on: '2020-08-11T01:30:03+00:00', occupancy: 1 },
      { on: '2020-08-11T01:45:06+00:00', occupancy: 1 },
      { on: '2020-08-11T02:00:11+00:00', occupancy: 1 },
      { on: '2020-08-11T02:15:14+00:00', occupancy: 1 },
      { on: '2020-08-11T02:30:17+00:00', occupancy: 1 },
      { on: '2020-08-11T02:45:20+00:00', occupancy: 1 },
      { on: '2020-08-11T03:00:23+00:00', occupancy: 1 },
      { on: '2020-08-11T03:15:26+00:00', occupancy: 1 },
      { on: '2020-08-11T03:30:29+00:00', occupancy: 1 },
      { on: '2020-08-11T03:45:02+00:00', occupancy: 1 },
      { on: '2020-08-11T04:00:05+00:00', occupancy: 1 },
      { on: '2020-08-11T04:15:08+00:00', occupancy: 1 },
      { on: '2020-08-11T04:30:11+00:00', occupancy: 1 },
      { on: '2020-08-11T04:45:14+00:00', occupancy: 1 },
      { on: '2020-08-11T05:00:18+00:00', occupancy: 1 },
      { on: '2020-08-11T05:15:21+00:00', occupancy: 1 },
      { on: '2020-08-11T05:30:24+00:00', occupancy: 1 },
      { on: '2020-08-11T05:45:27+00:00', occupancy: 1 },
      { on: '2020-08-11T06:00:30+00:00', occupancy: 1 },
      { on: '2020-08-11T06:15:03+00:00', occupancy: 1 },
      { on: '2020-08-11T06:30:06+00:00', occupancy: 1 },
      { on: '2020-08-11T06:45:09+00:00', occupancy: 1 },
      { on: '2020-08-11T07:00:12+00:00', occupancy: 1 },
      { on: '2020-08-11T07:15:15+00:00', occupancy: 1 },
      { on: '2020-08-11T07:30:18+00:00', occupancy: 1 },
      { on: '2020-08-11T07:45:21+00:00', occupancy: 1 },
      { on: '2020-08-11T08:00:25+00:00', occupancy: 1 },
      { on: '2020-08-11T08:15:28+00:00', occupancy: 1 },
      { on: '2020-08-11T08:30:31+00:00', occupancy: 1 },
      { on: '2020-08-11T08:45:04+00:00', occupancy: 2 },
      { on: '2020-08-11T09:00:07+00:00', occupancy: 2 },
      { on: '2020-08-11T09:15:11+00:00', occupancy: 2 },
      { on: '2020-08-11T09:30:14+00:00', occupancy: 2 },
      { on: '2020-08-11T09:45:17+00:00', occupancy: 2 },
      { on: '2020-08-11T10:00:21+00:00', occupancy: 2 },
      { on: '2020-08-11T10:15:24+00:00', occupancy: 2 },
      { on: '2020-08-11T10:30:27+00:00', occupancy: 2 },
      { on: '2020-08-11T10:45:30+00:00', occupancy: 2 },
      { on: '2020-08-11T11:00:04+00:00', occupancy: 2 },
      { on: '2020-08-11T11:15:07+00:00', occupancy: 1 },
      { on: '2020-08-11T11:30:11+00:00', occupancy: 1 },
      { on: '2020-08-11T11:45:14+00:00', occupancy: 1 },
      { on: '2020-08-11T12:00:17+00:00', occupancy: 1 },
      { on: '2020-08-11T12:15:20+00:00', occupancy: 1 },
      { on: '2020-08-11T12:30:23+00:00', occupancy: 1 },
      { on: '2020-08-11T12:45:26+00:00', occupancy: 1 },
      { on: '2020-08-11T13:00:30+00:00', occupancy: 1 },
      { on: '2020-08-11T13:15:03+00:00', occupancy: 7 },
    ];

    return JSON.stringify(dataPoints);
  });

  this.passthrough('/members/**');
  this.passthrough('/sections/**');
  this.passthrough('/contact-form.php');

  if (ENV['environment'] === 'production') {
    this.passthrough('/occupancy.php');
  }

  if (ENV['environment'] === 'testing') {
    this.passthrough('/occupancy.php');
  }
}
