import joi from 'joi';
import validate from 'koa-joi-validate';

export const validatePlayerName = validate({
	query: {
		player_name: joi.string().alphanum().required()
	}
});

export const validateClubName = validate({
	query: {
		club_name: joi.string().alphanum().required()
	}
});
