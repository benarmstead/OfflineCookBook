import 'package:flutter/material.dart';
import 'package:offline_cook_book/screens/multiple_recipes.dart';

import 'objects/data.dart';
import 'objects/recipe.dart';
import 'objects/tag.dart';
import 'screens/tags_menu.dart';

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
  List<Tag> allTags = [];

  getRecipesAndTags() async {
    var assetsPath = 'AssetManifest.json';
    var allAssets = await DefaultAssetBundle.of(context).loadString(assetsPath);

    var data = Data(allAssets);
    allRecipes = data.getAllRecipes();
    allTags = data.getAllTags();
  }

  @override
  void initState() {
    super.initState();
    getRecipesAndTags();
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
                          builder: (context) =>
                              MultipleRecipesScreen(allRecipes, "All Recipes")),
                    );
                  },
                  child: const Text("All Recipes")),
              ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => AllTagsScreen(allTags)),
                    );
                  },
                  child: const Text("All Tags")),
            ]))));
  }
}
