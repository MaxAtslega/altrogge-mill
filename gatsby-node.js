const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path")
const quiz = require("./src/config/quiz.json")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};


exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const quizTemplate = path.resolve(`src/templates/quiz/index.tsx`)
  quiz.forEach((node, index) => {
    createPage({
      path: `/quiz/${index+1}`,
      component: quizTemplate,
      context: {...node, id: index+1, lastQuestion: (quiz.length-1) === index},
    })
  })
}
