# QBuild
## Installation
For installing qbuild, run the following command:
```
$ pip install qbuild
```

## Structure of qbuild project
```
root
├── src
│   ├── .qtest
│   ├── .qsampletest (optional, for projects with sample test)
│   └── ... (project files)
├── statement
│   └── statement.md
├── tester_config.json
├── valid_files
└── .gitignore
```

### valid_files
List of files (seprated by newline) that are part of solution and should be included in submitted files. Path is relative to `root/src`.


Example of valid_files in a react project:
```
src/hooks/use-snake.js
src/logic.js
```
Path of these files from root is `root/src/src/logic.js` and `root/src/src/hooks/use-snake.js`.

### tester_config.json
JSON Config of how Quera should score submissions.

```json
{
  "version": 2,
  "tester_version": 2,
  "solution_signature": "src/hooks/use-snake.js",
  "packages": [
    {
      "name": "test_snake_game",
      "score": [
        20,
        40,
        60,
        40,
        60,
        40,
        40,
        50
      ],
      "tests": [
        "renders snake and food",
        "snake moves in start",
        "change direction",
        "cant go in reverse direction",
        "snake grows",
        "food appear in random place",
        "snake can go through board",
        "reset game when snake hit itself"
      ],
      "aggregator": "sum"
    }
  ]
}
```
- `version` and `tester_version`: Versions are 2 for now and they should be included.
- `solution_signature`: Path to a solution file (relative to `root/src`), so that solution can be unzipped with correct path even if there is extra folder after get zipped. It doesn't matter which solution file you choose. In the above example path of the file from root is `root/src/src/hooks/use-snake.js`.
- `packages`: List of packages, usually have one package in it and it contains test names and scores for them.
- `name`: Name of package which is displayed in Quera submission report, usually just `test_` + project name
- `score` and `tests`:  For every test in tests field there has to be corresponding score for that test in scores field (They should have same length). 
- `aggregator`: Tells Quera how to treat scores. `sum` means sum of all scores is full score. This field has other values such as `min` and `max` but in very rare cases they are needed.

Notes:
- Tests names in `tests` field should have same name as they have in the test file.
- Sum of scores get scaled to score you give it in Quera.
- If your project just have one file for solution, you can add `can_submit_single_file` and `single_file_path` fields so users can also submit the solution file directly (They can still submit zip file), for example (frontend-cypress project):
```json
{
  "version": 2,
  "tester_version": 2,
  "solution_signature": "main.js",
  "can_submit_single_file": true,
  "single_file_path": "main.js",
  "packages": [
    {
      "name": "slider",
      "score": [
        10, 10
      ],
      "tests": [
        "Slider Tests: slider should go forward and backward when next and prev button clicked",
        "Slider Tests: slider should mirror when next and prev button clicked and reaches end"
      ],
      "aggregator": "sum"
    }
  ]
}
```


### .qtest and .qsampletest
`.qtest` file should include path of files (seprated by newline) that are part of test so that they just get included in test output and not in initial project or solution. Path is relative to `root/src`.

Example of .qtest in a react project:
```
src/__tests__/snake.test.js
src/__tests__/small-snake.test.js
```

`.qsampletest` is similar to `.qtest` but for sample tests. When this file exists in project there will be extra button in Quera for submitting for sample test. It is optional so if you don't want to have sample tests don't create this file.

Example of .qsampletest in a react project:
```
src/__tests__/sample.test.js
```

### statement.md
A md file that get converted to `README.md` after qbuild command.

```md
{% extends "statement_base.md" %}

{% block intro %}
ظاهر کلی برنامه بدین صورت است:

![ظاهر برنامه](attachments/overview.gif)

{% endblock intro %}

{% block run %}

... how to run ...

{% endblock run %}

{% block details %}

... details ...

{% endblock details %}

{% block notes %}

... notes ...

{% endblock notes %}
```

Run qbuild after creating this file so that you can see how each block get converted.

## Seprating solution from initial project
### .nosolution extension
You can seprate solution just by creating new file with the same name that has `.nosolution` before extension.
For example if you have file named `main.js` and you can make new file `main.nosolution.js` that doesn't have the solution and is made for initial project.

This new file doesn't change anything about paths in other files.

### _q_solution_begin comment
WIP
