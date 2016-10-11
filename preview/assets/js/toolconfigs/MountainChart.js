var VIZABI_MODEL = {
  "state": {
    "time": {
      "start": "1800",
      "end": "2015",
      "value": "2015"
    },
    "entities": {
      "dim": "geo",
      "show": {
        "is--country": true
      }
    },
    "entities_allpossible": {
      "dim": "geo",
      "show": {
        "is--country": true
      }
    },
    "entities_minimap": {
      "dim": "geo",
      "show": {
        "is--world_4region": true
      }
    },
    "entities_group": {
      "dim": "geo",
      "show": {
          "is--world_4region": true
      }
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker": {
      "space": ["entities", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "axis_y": {
        "use": "indicator",
        "which": "sg_population",
        "scaleType": 'linear'
      },
      "axis_x": {
        "use": "indicator",
        "which": "sg_gdp_p_cap_const_ppp2011_dollar",
        "scaleType": 'log',
        "domainMin": 0.11, //0
        "domainMax": 500, //100
        "tailFatX": 1.85,
        "tailCutX": 0.2,
        "tailFade": 0.7,
        "xScaleFactor": 1.039781626,
        "xScaleShift": -1.127066411
      },
      "axis_s": {
        "use": "indicator",
        "which": "sg_gini",
        "scaleType": 'linear'
      },
      "color": {
        "use": "property",
        "which": "world_4region",
        "scaleType": "ordinal",
        "allow": {
          "names": ["!name"]
        }
      },
      "stack": {
        "use": "constant",
        "which": "all" // set a property of data or values "all" or "none"
      },
      "group": {
        "use": "property",
        "which": "world_4region",
        "manualSorting": ["asia", "africa", "americas", "europe"],
        "merge": false
      }
    },
    "marker_minimap":{
      "space": ["entities_minimap"],
        "type": "geometry",
        "shape": "svg",
        "label": {
          "use": "property",
          "which": "name"
        },
        "geoshape": {
          "use": "property",
          "which": "shape_lores_svg"
        }
    },
    "marker_group":{
      "space": ["entities_group"],
        "label": {
          "use": "property",
          "which": "name"
        }
    },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "parent": {
        "use": "property",
        "which": "parent"
      }
    }
  }
}