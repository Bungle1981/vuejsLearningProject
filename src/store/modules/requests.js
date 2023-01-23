export default {
    namespaced: true,
    state() {
        return {
            requests: [],
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        }
    },
    getters: {
        allRequests(state) {
            return state.requests;
        },
        hasRequests(state) {
            return state.requests && state.requests.length > 0; 
        }
    },
    actions: {
        contactCoach(context, payload) {
            console.log("Request / Add Request Reached...")
            const tempRequest = {
                id: new Date().toISOString,
                coachId: payload.coachId,
                userEmail: payload.email,
                message: payload.message,
            };
            context.commit('addRequest', tempRequest);
        }
    },
}