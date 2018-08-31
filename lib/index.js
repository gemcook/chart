"use strict";
function factory$jscomp$inline_1(
  exports,
  _rollupPluginBabelHelpers,
  recompose,
  $,
  React,
  reactChartjs2,
  ramda,
  PropTypes
) {
  function Doughnut(props) {
    var labels = props.labels,
      datasets = props.datasets,
      refs = props.refs;
    return React.createElement(
      "div",
      {
        ref: function(el) {
          return refs.store("_Doughnut", el);
        }
      },
      React.createElement("h1", null, "Doughnut Chart"),
      React.createElement(reactChartjs2.Doughnut, {
        data: { labels: labels, datasets: datasets }
      })
    );
  }
  function Pie(props) {
    var labels = props.labels,
      datasets = props.datasets,
      refs = props.refs;
    return React.createElement(
      "div",
      {
        ref: function(el) {
          return refs.store("_Pie", el);
        }
      },
      React.createElement("h1", null, "Pie Chart"),
      React.createElement(reactChartjs2.Pie, {
        data: { labels: labels, datasets: datasets }
      })
    );
  }
  function Radar(props) {
    var labels = props.labels,
      datasets = props.datasets,
      refs = props.refs;
    return React.createElement(
      "div",
      {
        ref: function(el) {
          return refs.store("_Radar", el);
        }
      },
      React.createElement("h1", null, "Rader Chart"),
      React.createElement(reactChartjs2.Radar, {
        data: { labels: labels, datasets: datasets }
      })
    );
  }
  $ = $ && $.hasOwnProperty("default") ? $["default"] : $;
  PropTypes =
    PropTypes && PropTypes.hasOwnProperty("default")
      ? PropTypes["default"]
      : PropTypes;
  ramda = (function() {
    function RefsStore() {
      _rollupPluginBabelHelpers.classCallCheck(this, RefsStore);
    }
    _rollupPluginBabelHelpers.createClass(RefsStore, [
      {
        key: "store",
        value: function(name, element) {
          this[name] = element;
        }
      }
    ]);
    return RefsStore;
  })();
  ramda = recompose.compose(
    recompose.setDisplayName("Doughnut"),
    recompose.withProps({ refs: new ramda() }),
    recompose.lifecycle({
      componentDidMount: function() {
        console.log($(this.props.refs._Doughnut).css("display", "block"));
      }
    })
  )(function(props) {
    return React.createElement(Doughnut, props);
  });
  var RefsStore$1 = (function() {
    function RefsStore() {
      _rollupPluginBabelHelpers.classCallCheck(this, RefsStore);
    }
    _rollupPluginBabelHelpers.createClass(RefsStore, [
      {
        key: "store",
        value: function(name, element) {
          this[name] = element;
        }
      }
    ]);
    return RefsStore;
  })();
  RefsStore$1 = recompose.compose(
    recompose.setDisplayName("Pie"),
    recompose.withProps({ refs: new RefsStore$1() }),
    recompose.lifecycle({
      componentDidMount: function() {
        console.log($(this.props.refs._Pie).css("display", "block"));
      }
    })
  )(function(props) {
    return React.createElement(Pie, props);
  });
  var RefsStore$2 = (function() {
    function RefsStore() {
      _rollupPluginBabelHelpers.classCallCheck(this, RefsStore);
    }
    _rollupPluginBabelHelpers.createClass(RefsStore, [
      {
        key: "store",
        value: function(name, element) {
          this[name] = element;
        }
      }
    ]);
    return RefsStore;
  })();
  recompose = recompose.compose(
    recompose.setDisplayName("Radar"),
    recompose.setPropTypes({
      datasets: PropTypes.array,
      refs: PropTypes.object
    }),
    recompose.withProps({ refs: new RefsStore$2() }),
    recompose.lifecycle({ componentDidMount: function() {} })
  )(function(props) {
    return React.createElement(Radar, props);
  });
  exports.Doughnut = ramda;
  exports.Pie = RefsStore$1;
  exports.Radar = recompose;
  Object.defineProperty(exports, "__esModule", { value: !0 });
}
"object" === typeof exports && "undefined" !== typeof module
  ? factory$jscomp$inline_1(
      exports,
      require("\x00rollupPluginBabelHelpers"),
      require("recompose"),
      require("jquery"),
      require("react"),
      require("react-chartjs-2"),
      require("ramda"),
      require("prop-types")
    )
  : "function" === typeof define && define.amd
    ? define("exports \x00rollupPluginBabelHelpers recompose jquery react react-chartjs-2 ramda prop-types".split(
        " "
      ), factory$jscomp$inline_1)
    : factory$jscomp$inline_1(
        (this["@gemcook/chart"] = {}),
        this._rollupPluginBabelHelpers,
        this.recompose,
        this.$,
        this.React,
        this.reactChartjs2,
        this.ramda,
        this.PropTypes
      );
