import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import fs from "react-native-fs";
import Markdown from "react-native-markdown-display";

const copy = `# Markdown test
`;

/*async function getFilesInDirec(path) {
  let items = [];
  let files = await fs.readDirAssets(path);
  /*.then((file) => {
      file.forEach((item) => {
        items.push(item.path);
      });
    })
    .catch(console.error)
    .finally(() => {
      //console.log(items);
      return items;
    });
  return files;
}*/

function readFile(path) {}

function getRecipes(recipes) {
  let recipesList = [];
  recipes.forEach((element) => {
    let data = readFile(element);
    recipesList.push(data);
  });
  return recipesList;
}

const App: () => React = () => {
  const [recipesDirec, setRecipesDirec] = useState();
  const [recipes, setRecipes] = useState();

  let direcItems = [];
  let dataItems = [];

  fs.readDirAssets("recipes/markdown/")
    .then((file) => {
      file.forEach((item) => {
        direcItems.push(item.path);
      });
    })
    .catch(console.error)
    .finally(() => {
      setRecipesDirec(direcItems);
    });

  /*if (recipesDirec !== undefined) {
    recipesDirec.forEach((element) => {
      console.log(element);
      fs.readFileAssets(element, "utf8")
        .then((text) => {
          dataItems.push(text);
        })
        .catch(console.error)
        .finally(() => {
          setRecipes(dataItems);
        });
    });*/

  //console.log(dataItems);
  //let recipesData = getRecipes(recipes);

  //console.log(recipesData);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: "100%" }}
        >
          <Markdown>{copy}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
