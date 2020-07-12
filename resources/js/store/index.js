export default {
    state: {
        carts: {},
        products: {},
        product: {},
        users: {},
        user: {},
        rolesAuth: {},
        roles: {},
        rolesUser: [],
        profilUser: {},
        
    },

    getters: {
        getTotal: state => {
            let cTotal = Object.values(state.carts).reduce(
                (t, {qty}) => t + Number(qty),0
            );

            return cTotal;
        },
        getProfilUserFromGetters(state) {

            return state.profilUser
        },
        //Roles_user
        getRolesUserFromGetters(state) {

            return state.rolesUser
        },
        //Roles
        getRolesFromGetters(state) {

            return state.roles
        },
        //Auth
        getAuthFromGetters(state) {

            return state.rolesAuth
        },
        //User
        getUserFromGetters(state) {

            return state.user
        },
        //Users
        getUsersFromGetters(state) {

            return state.users
        },
        //Carts
        getCartFromGetters(state) {

            return state.carts
        },
        //Products
        getProductsFromGetters(state) {

            return state.products
        },
        //Product
        getProductFromGetters(state) {

            return state.product
        },

    },
    mutations: {
        profilUser(state, data) {
            return state.profilUser = data
        },
        //Roles_user
        rolesUser(state, data) {
            return state.rolesUser = data
        },
        //Roles
        roles(state, data) {
            return state.roles = data
        },
        //User
        auth(state, data) {
            return state.rolesAuth = data
        },
        //User
        user(state, data) {
            return state.user = data
        },
        users(state, data) {
            return state.users = data
        },
        //Carts
        carts(state, data) {
            return state.carts = data
        },
        //Products
        products(state, data) {
            return state.products = data
        },
        //Product
        product(state, data) {
            return state.product = data
        },
    },

    actions: {
        async allProfilFromDatabase(context) {
            let data = (await axios.get("getProfil")).data;
            context.commit("profilUser", data.user)
        },
        //User Roles Roles_user
        async editFromDatabase({ commit }) {
            let currentUrl = window.location.pathname;
            await axios.get("/admin/getUsers/" + currentUrl.substr(13))
            .then(({ data }) => {
                commit("user", data.user)
                commit("roles", data.roles)
                commit("rolesUser", data.rolesUser)
                commit("auth", data.auth)
            })
            
        },
        //Users
        async allUsersFromDatabase(context) {
            let data = (await axios.get("getUsers")).data;
            context.commit("users", data.users)
            context.commit("auth", data.auth)
        },
        //Carts
        async allCartFromDatabase(context) {
            let data = (await axios.get("/getCarts")).data;
            context.commit("carts", data.carts)
        },
        //Products
        async allProductsFromDatabase(context) {
            let data = (await axios.get('/api/getProduct')).data;
            context.commit('products', data.products)
        },
        //Product
        async allProductFromDatabase({commit}) {
            let currentUrl = window.location.pathname;
            await axios.get('/api/getProduct/' + currentUrl.substr(9))
            .then(({data}) => {
                commit('product', data.product)
            })
            
        },
    },

}
