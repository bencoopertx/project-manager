export const addSection = async (form) => {
	try {
		try {
			console.log("adding cared");
			const res = await fetch("http://localhost:3000/api/workspaces/1/sections", {
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
