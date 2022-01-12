import 'package:flutter/material.dart';
import 'package:offline_cook_book/objects/recipe.dart';

import 'single_recipe.dart';

class MultipleRecipesScreen extends StatelessWidget {
  const MultipleRecipesScreen(this.recipes, this.name, {Key? key})
      : super(key: key);

  final List<Recipe> recipes;
  final String name;

  final double width = 400;

  @override
  Widget build(context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(name),
        ),
        body: CustomScrollView(
          primary: false,
          slivers: <Widget>[
            SliverPadding(
              padding: const EdgeInsets.all(5),
              sliver: SliverGrid.count(
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                crossAxisCount: 3,
                children: <Widget>[
                  for (var i in recipes)
                    ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => SingleRecipeScreen(i)),
                          );
                        },
                        child: Text(i.getTitle())),
                ],
              ),
            ),
          ],
        ));
  }
}
