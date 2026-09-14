const mongoose = require('mongoose');

const APPLICATION_STATUSES = [
  'Wishlist',
  'Applied',
  'Assessment',
  'Interview',
  'Offer',
  'Rejected',
  'Withdrawn',
];

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },

    jobTitle: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    type: {
      type: String,
      enum: ['Remote', 'Hybrid', 'On-site'],
      default: 'Remote',
    },

    applicationDate: {
      type: Date,
      default: Date.now,
    },

    deadline: {
      type: Date,
      index: true,
    },

    jobUrl: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: APPLICATION_STATUSES,
      default: 'Wishlist',
      index: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },

    recruiterName: {
      type: String,
      trim: true,
    },

    recruiterEmail: {
      type: String,
      trim: true,
    },

    resumeVersion: {
      type: String,
      trim: true,
    },

    portfolioUrl: {
      type: String,
      trim: true,
    },

    githubUrl: {
      type: String,
      trim: true,
    },

    linkedinUrl: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

applicationSchema.index({ user: 1, status: 1 });
applicationSchema.index({ user: 1, deadline: 1 });

applicationSchema.index({
  companyName: 'text',
  jobTitle: 'text',
});

module.exports = mongoose.model('Application', applicationSchema);
module.exports.APPLICATION_STATUSES = APPLICATION_STATUSES;