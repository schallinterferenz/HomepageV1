const { mongoose } = require(".");

module.exports = mongoose => {
    const News = mongoose.model(
        "news",
        mongoose.Schema(
            {
                id: Number,
                date: Date,
                autor: String,
                title: String,
                subtitle: String,
                newstext: String,
            },
            {
                timestamps: true
            }
        )
    );

    return User;
}