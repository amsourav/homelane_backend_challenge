import request from 'supertest';
import server from '../src';

afterEach(() => {
	server.close();
});

describe('GET /', () => {
	it('should render application name and version', async () => {
		await request(server).get('/').expect(200);
	});
});

describe('GET /404', () => {
	it('should return 404 for non-existent URLs', async () => {
		await request(server).get('/404').expect(404);
		await request(server).get('/notfound').expect(404);
	});
});

describe('GET /api/get_player_info', () => {
	it('show return 400 for not passing player_name', async () => {
		await request(server).get('/api/get_player_info').expect(400);
	});

	it('show return 400 for invalid params', async () => {
		await request(server)
			.get('/api/get_player_info?player_name=;"')
			.expect(400);
	});

	it('show return 200 for correctly passing params', async () => {
		await request(server)
			.get('/api/get_player_info?player_name=sourav')
			.expect(200);
	});
});

describe('GET /api/get_club_player_list', () => {
	it('show return 400 for not passing club_name', async () => {
		await request(server).get('/api/get_club_player_list').expect(400);
	});

  it('show return 400 for invalid params', async () => {
		await request(server)
			.get('/api/get_player_info?club_name=;"')
			.expect(400);
	});

	it('show return 200 for correctly passing params', async () => {
		await request(server)
			.get('/api/get_club_player_list?club_name=sourav')
			.expect(200);
	});
});
