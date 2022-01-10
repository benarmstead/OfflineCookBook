import 'package:flutter/material.dart';
import 'package:offline_cook_book/computation/recipe_list.dart';
import 'package:offline_cook_book/screens/recipe_screen.dart';
import 'package:offline_cook_book/objects/recipe.dart';

class AllRecipesScreen extends StatefulWidget {
  const AllRecipesScreen({Key? key}) : super(key: key);

  @override
  State<AllRecipesScreen> createState() => _AllRecipesScreenState();
}

class _AllRecipesScreenState extends State<AllRecipesScreen> {
  List<Recipe> allRecipes = [];
  var loaded = false;

  Future<List<Recipe>> listRecipes() async {
    var assetsPath = 'AssetManifest.json';
    var allAssets = await DefaultAssetBundle.of(context).loadString(assetsPath);
    allRecipes = await Data().extractRecipes(allAssets);
    return allRecipes;
  }

  double width = 400;

  @override
  Widget build(context) {
    return FutureBuilder<List<Recipe>>(
        future: listRecipes(),
        builder: (context, AsyncSnapshot<List<Recipe>> snapshot) {
          if (snapshot.hasData) {
            return Scaffold(
              appBar: AppBar(
                title: const Text("All Recipes"),
              ),
              body: SingleChildScrollView(
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      for (var i = 0; i < allRecipes.length; i++)
                        Container(
                          width: width,
                          padding:
                              const EdgeInsets.fromLTRB(15.0, 5.0, 15.0, 5.0),
                          alignment: Alignment.center,
                          child: SizedBox(
                            width: width,
                            child: ElevatedButton(
                                onPressed: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            RecipeScreen(allRecipes[i])),
                                  );
                                },
                                child: Text(allRecipes[i].getTitle())),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            );
          } else {
            return const CircularProgressIndicator();
          }
        });
  }
}
