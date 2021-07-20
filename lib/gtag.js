export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
  }
//   function TrackTiming(category, variable, opt_label) {
//   this.category = category;
//   this.variable = variable;
//   this.label = opt_label ? opt_label : undefined;
//   this.startTime;
//   this.endTime;
//   return this;
// }

// TrackTiming.prototype.startTime = function() {
//   this.startTime = new Date().getTime();
//   return this;
// }

// TrackTiming.prototype.endTime = function() {
//   this.endTime = new Date().getTime();
//   return this;
// }

// TrackTiming.prototype.send = function() {
//   var timeSpent = this.endTime - this.startTime;
//   window._gaq.push(['_trackTiming', this.category, this.variable, timeSpent, this.label]);
//   return this;
// }

