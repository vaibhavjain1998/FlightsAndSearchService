/
    -src/ ( Actual server logic stores in src.)
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/ (storing DB configurations)
        repository/ will give methods to access folders
    -tests/[later] (other files need not to be added with server)
    -static/
    -temp/

/ We are doing role based not feature based.
    Role-based: All the controllers in one folder, all the models in one folder.

    Feature-based: Seperate models and controllers for each feature.
        -filghts
          / models
          /controllers
        -search
          /models
          /controllers