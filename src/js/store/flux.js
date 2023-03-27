const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			contact: {}
		},
		actions: {
			addContactList: (contactList) => {
				setStore({contactList: contactList});
			},
			editContact: (editContact) => {
				const store = getStore();
				setStore({...store, contact : editContact})
			}
		}
	};
};

export default getState;
