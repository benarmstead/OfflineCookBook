import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:offline_cook_book/recipe.dart';

class RecipeScreen extends StatefulWidget {
  final Recipe recipe;
  // ignore: use_key_in_widget_constructors
  const RecipeScreen(this.recipe);
  @override
  _RecipeScreen createState() => _RecipeScreen();
}

class _RecipeScreen extends State<RecipeScreen> {
  @override
  Widget build(BuildContext context) {
    double padding = 10;
    double width = 800;
    double height = 100;

    return Scaffold(
        appBar: AppBar(
          title: Text(widget.recipe.getTitle()),
        ),
        body: Center(
          child: Container(
            constraints: BoxConstraints(minWidth: height, maxWidth: width),
            padding: EdgeInsets.all(padding),
            child: Markdown(data: widget.recipe.getBody()),
          ),
        ));
  }
}
