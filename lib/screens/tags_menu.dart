import 'package:flutter/material.dart';
import 'package:offline_cook_book/objects/tag.dart';
import 'package:offline_cook_book/screens/multiple_recipes.dart';

class AllTagsScreen extends StatelessWidget {
  const AllTagsScreen(this.allTags, {Key? key}) : super(key: key);

  final List<Tag> allTags;

  final double width = 400;

  @override
  Widget build(context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("All Tags"),
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
                  for (var i in allTags)
                    ElevatedButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => MultipleRecipesScreen(
                                    i.getRecipes(), i.getName().capitalize())),
                          );
                        },
                        child: Text(i.getName().capitalize())),
                ],
              ),
            ),
          ],
        ));
  }
}

extension StringExtension on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1)}";
  }
}
