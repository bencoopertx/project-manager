import { Card } from "src/types/cardTypes";

export const addCard = async (form: Card) => {
	try {
		try {
			console.log("adding cared");
			const res = await fetch("http://localhost:3000/api/workspaces/1/sections/1/cards", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});
		} catch (error) {
			console.log(error);
		}
	} catch (err) {}
};

export const dragCard = async (id: string, position: { sectionId: string; index: string }) => {
	try {
		try {
			console.log("updating card");
			const card = await getCardById(id);
			const res = await fetch(`http://localhost:3000/api/workspaces/1/sections/1/cards/${id}`, {
				method: "PUT",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ sectionId: position.sectionId, index: position.index, ...card }),
			});
		} catch (error) {
			console.log(error);
		}
	} catch (err) {}
};

export const getCardById = async (id: string) => {
	try {
		try {
			const res = await fetch(`http://localhost:3000/api/workspaces/1/sections/1/cards/${id}`, {
				method: "GET",
			});
			return res;
		} catch (error) {
			console.log(error);
		}
	} catch (err) {}
};
