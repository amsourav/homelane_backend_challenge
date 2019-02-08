import Router from 'koa-router';
import fetch from 'node-fetch';
import { validatePlayerName, validateClubName } from './QueryUtil';

const router = new Router({
	prefix: '/api'
});

/**
 * GET /get_player_info
 */
router.get('/get_player_info', validatePlayerName, async (ctx) => {
	const { player_name } = ctx.query;
	const response = await fetch(`http://query:8081/data/getPlayerData?player_name=${player_name}`);

	ctx.body = await response.json();
});

/**
 * GET /get_club_player_list
 */
router.get('/get_club_player_list', validateClubName, async (ctx) => {
	const { club_name } = ctx.query;
	const response = await fetch(`http://query:8081/data/getClubData?club_name=${club_name}`);
	ctx.body = await response.json();
});

/**
 * GET /strengthen_team
 */
router.get('/strengthen_team', validateClubName, async (ctx) => {
	ctx.throw(501);
});

export default router;
