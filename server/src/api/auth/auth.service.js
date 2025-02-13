const { db, collection, query, where, getDocs } = require("../../firebase-config");

const loginUser = async (nama, NIK, email, gender, tempat_lahir, tanggal_lahir, angkatan) => {
    try {
        const formattedTanggalLahir = new Date(tanggal_lahir).toISOString().split("T")[0];

        const usersRef = collection(db, "user");

        const q = query(
            usersRef,
            where("nama", "==", nama),
            where("nim", "==", nim),
            where("NIK", "==", NIK),
            where("email", "==", email),
            where("gender", "==", gender),
            where("tempat_lahir", "==", tempat_lahir),
            where("tanggal_lahir", "==", formattedTanggalLahir), 
            where("angkatan", "==", angkatan)
        );

        const querySnapshot = await getDocs(q);


        if (querySnapshot.empty) {
            throw new Error("User not found or invalid credentials!");
        }

        let userData = null;
        querySnapshot.forEach((doc) => {
            userData = doc.data();
        });

        return { success: true, user: userData };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = { loginUser };
