import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/services.dart';

class Recipe {
  String title = "";
  String body = "";
  String filePath;
  List<String> tags = [];

  Recipe(this.filePath);

  void start() {
    fixImages();
    setTitle();
    setTags();
  }

  Future<void> readText() async {
    body = await rootBundle.loadString(filePath);
  }

  void fixImages() {
    if (kIsWeb) {
      body = body.replaceAll('pix/', '${Uri.base}/assets/recipes/pictures/');
    } else {
      body = body.replaceAll('pix/', 'assets/recipes/pictures/');
    }
  }

  void setTitle() {
    title = body.split('\n')[0];
    title = title.replaceAll('#', '');
  }

  void setTags() {
    tags = body.split('\n');
    tags = tags[tags.length - 1].replaceAll(';tags:', '').split(' ');
    tags.removeAt(0);
  }

  String getBody() {
    if (body.contains('recipes/pictures/')) {
      return "Cannot display images at the moment";
    }
    return body;
  }

  String getTitle() {
    return title;
  }
}
