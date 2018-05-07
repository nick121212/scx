import {
	handleActions
} from 'redux-actions';
import {
	Actions,
	initalzeState
} from '../constants/articlelist';

export const reducer = handleActions({
	[Actions.FETCH_SHULIANBANG]: (state, action) => {
		if (action.error) {
			return state;
		}
		if (action.payload.refresh) {
			return Object.assign({}, state, {
				articles: action.payload.data
			});
		}

		let {
			articles
		} = state;


		return Object.assign({}, state, {
			articles: articles.concat(action.payload.data)
		});
	},
	[Actions.SET_SHULIAN_LOADING]: (state, action) => {
		return Object.assign({}, state, {
			loading: !!action.payload
		});
	},
	[Actions.SET_SHULIAN_PAGINFO]: (state, action) => {
		let {
			pageSize = state.pageSize, pageNum = state.pageNum
		} = action.payload;

		return Object.assign({}, state, {
			pageSize,
			pageNum
		});
	},
	[Actions.SET_SHULIAN_HASMORE]: (state, action) => {
		return Object.assign({}, state, {
			hasMore: action.payload
		});
	},
	[Actions.RESET_PAGE_INFO]: (state, action) => {
		let obj = Object.assign({}, state, {
			pageNum: 1,
			hasMore: true
		});
		return obj;
	},
	[Actions.CHANGE_STATUS]: (state, action) => {
		let targetId = action.payload.data;

		let lst = state.articles;

		for (let i = 0; i < lst.length; i++) {
			if (targetId == lst[i].id) {
				lst[i].show_status = 0;
			}
		}
		let obj = Object.assign({}, state, {
			articles: lst
		});

		return obj;
	},
	[Actions.CHANGE_ALL_SATTUS]: (state, action) => {

		let lst = state.articles;
		for (let i = 0; i < lst.length; i++) {
			lst[i].show_status = 0;
		}
		let obj = Object.assign({}, state, {
			articles: lst
		});

		return obj;
	}
}, initalzeState);
