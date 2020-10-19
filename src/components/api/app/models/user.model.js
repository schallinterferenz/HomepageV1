const { mongoose } = require(".");

module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                _id : String,
                username: String,
                passwordHashed: String,
                createdAt: Date,
                updatedAt: Date
            },
            {
                timestamps: true
            }
        )
    );

    return User;
}