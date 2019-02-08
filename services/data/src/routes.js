import Router from 'koa-router';
import pool from './db';
import { validatePlayerName, validateClubName } from './util';
const router = new Router({
	prefix: '/data'
});

/**
 * GET /
 */
router.get('/getPlayerData', validatePlayerName, async (ctx) => {
	const response = await pool.query(
		`
		SELECT * 
		FROM PERSONAL 
		INNER JOIN ATTRIBUTE on PERSONAL.id = ATTRIBUTE.id
		WHERE name like ?`,
		[ `%${ctx.query.player_name}%` ]
	);

	ctx.body = response;
});

router.get('/getClubData', validateClubName, async (ctx) => {
	const response = await pool.query(
		`
		SELECT * 
		FROM PERSONAL 
		INNER JOIN ATTRIBUTE on PERSONAL.id = ATTRIBUTE.id
		WHERE club like ?`,
		[ `%${ctx.query.club_name}%` ]
	);

	ctx.body = response;
});

export default router;
