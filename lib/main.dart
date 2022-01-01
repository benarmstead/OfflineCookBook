import 'dart:convert';

import 'package:flutter/material.dart';
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
      home: const MyHomePage(title: 'Offline Cook Book'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void initState() {
    super.initState();
    listRecipes();
  }

  List<String> allRecipes = [];
  List<String> allRecipeNames = [];

  void listRecipes() async {
    final allAssets =
        await DefaultAssetBundle.of(context).loadString('AssetManifest.json');
    final recipesOnly = json
        .decode(allAssets)
        .keys
        .where((String key) => key.startsWith('assets/recipes/markdown/'));
    for (var i in recipesOnly) {
      allRecipes.add(i);
      i = i.split('/');
      i = i[i.length - 1].replaceAll('-', ' ');
      i = i.substring(0, i.length - 3);
      i = i[0].toUpperCase() + i.substring(1);
      allRecipeNames.add(i);
    }
    setState(() {});
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
              for (var i = 0; i < allRecipes.length && i < 10; i++)
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
                                builder: (context) => Recipe(allRecipes[i])),
                          );
                        },
                        child: Text(allRecipeNames[i])),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
