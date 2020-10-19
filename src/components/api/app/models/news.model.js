const { mongoose } = require(".");

module.exports = mongoose => {
    const News = mongoose.model(
        "news",
        mongoose.Schema(
            {
                author: String,
                title: String,
                subtitle: String,
                newstext: String,
            },
            {
                timestamps: true
            }
        )
    );

    return News;
}