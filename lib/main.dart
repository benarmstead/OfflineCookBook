import 'package:flutter/material.dart';
import 'package:offline_cook_book/screens/all_recipes.dart';

import 'objects/data.dart';
import 'objects/recipe.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Offline Cook Book',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomePage(title: 'Offline Cook Book'),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Recipe> allRecipes = [];

  listRecipes() async {
    var assetsPath = 'AssetManifest.json';
    var allAssets = await DefaultAssetBundle.of(context).loadString(assetsPath);
    allRecipes = await Data().extractRecipeData(allAssets);
    return allRecipes;
  }

  @override
  void initState() {
    super.initState();
    listRecipes();
  }

  @override
  Widget build(context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: SingleChildScrollView(
            child: Center(
                child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
              ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => AllRecipesScreen(allRecipes)),
                    );
                  },
                  child: const Text("All Recipes")),
            ]))));
  }
}
