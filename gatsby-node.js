const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path")
const quiz = require("./config/quiz.json")

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
      path: `/quiz/${node.id}`,
      component: quizTemplate,
      context: {...node, lastQuestion: (quiz.length-1) === index},
    })
  })
}
