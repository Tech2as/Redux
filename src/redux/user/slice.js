import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    users: [],
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        //state = estado inicial, action = receber qual tipo ou payload
        //dentro da action, podemos pegar o payload, caso esteja mandando alguma informaçao quando chamar a action
      createUser: (state,action) => {
        //como nao podemos alterar diretamente o objeto, temos que manter uma copia dele, manter tudo que ja temos
        //e alterar apenas aqui que queremos, entao damos um return mantém tudo que já tem (...state) e depois
        //alteramos as propriedades que queremos

         return {
            ...state,
            //recebendo oque manda e colocando dentro da propriedade user dentro do redux
            user:{
                name: action.payload.name,
                email: action.payload.email,
                address: null,
            },
         }
      },
      logoutUser: (state) => {
        //receber os dados do state

        return{
            ...state,
            user:null,
        }
      },
      addAddress: (state, action) =>{
        if(action.payload.location === '' || action.payload.number === ''){
            alert("Preencha todos os campos")
            return {...state}
        }
        //verificaçao para nao deixar usuarios nao cadastrados adicionarem endereços
        if(state.user === null){
            alert("Faça login para cadastrar endereço!")
            return {...state}
        }
        
        alert("Dados atualizados!")
        return{
            //manter o state, manter as informaçoes
            ...state,
            user:{
                //mantendo os dados do user
                ...state.user,
                address:{
                    location: action.payload.location,
                    number: action.payload.number,
                }

            }

        }
      },

      deleteAddress: (state) => {
        return{
            ...state,
            user:{
                ...state.user,
                address:null,
            }
        }

      },

      fetchUsers: (state) => {
        state.loading = true;
      },
      fetchUsersSuccess: (state, action) => {
        state.users = action.payload;
        state.loading = false;

      },
      fetchUsersFailure: (state,action) => {
        console.log("Falha")
        state.loading = false;
      }

    }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers,
fetchUsersSuccess,fetchUsersFailure
} = userSlice.actions;

export default userSlice.reducer;

//manipular as açoes, estados iniciais que nossos reducers vao ter