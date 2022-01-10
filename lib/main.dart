import 'package:flutter/material.dart';
import 'package:offline_cook_book/recipe_list.dart';
import 'package:offline_cook_book/recipe_screen.dart';
import 'package:offline_cook_book/recipe.dart';

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

  void listRecipes() async {
    var recipeExtractor = Data(
        await DefaultAssetBundle.of(context).loadString('AssetManifest.json'));
    allRecipes = recipeExtractor.getRecipes();
  }

  @override
  Widget build(BuildContext context) {
    double width = 400;
    listRecipes();

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              for (var i = 0; i < allRecipes.length && i < 5; i++)
                Container(
                  width: width,
                  padding: const EdgeInsets.fromLTRB(15.0, 5.0, 15.0, 5.0),
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
  }
}
