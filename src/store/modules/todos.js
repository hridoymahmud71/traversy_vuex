import axios from 'axios';

const state = {
    todos:
        []

};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {
    async fetchTodos({ commit }) {

        const response = await axios.get(process.env.VUE_APP_JP_BASE_API_URL);
        window.console.log(response);
        window.console.log(commit);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {

        const response = await axios.post(process.env.VUE_APP_JP_BASE_API_URL,
            { title, completed: false });
        window.console.log(response);
        window.console.log(commit);
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        const response = await axios.delete(`${process.env.VUE_APP_JP_BASE_API_URL}/${id}`);
        window.console.log(response);
        window.console.log(commit);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        //get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`${process.env.VUE_APP_JP_BASE_API_URL}/?_limit=${limit}`);
        window.console.log(response);
        window.console.log(commit);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`${process.env.VUE_APP_JP_BASE_API_URL}/${updTodo.id}`, updTodo);
        window.console.log(response);
        window.console.log(commit);
        commit('updTodo', response.data);
    },
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updTodo: (state, updTodo) => {
        const idx = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (idx !== -1) {
            state.todos.splice(idx, 1, updTodo);
        }
    }
};



export default {
    state,
    getters,
    actions,
    mutations
}