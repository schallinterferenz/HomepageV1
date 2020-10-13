const { mongoose } = require(".");

module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                id: Number,
                username: String,
                passwordHashed: String,
            },
            {
                timestamps: true
            }
        )
    );

    return User;
}