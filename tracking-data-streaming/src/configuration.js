// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// This configuration file is a single place to provide any values to set up the app

export const READ_ONLY_IDENTITY_POOL_ID= "<your read only identity pool id>"; // REQUIRED - Amazon Cognito id for readonly role
export const WRITE_ONLY_IDENTITY_POOL_ID= "<your write only identity pool id>"; // REQUIRED - Amazon Cognito id for writeonly role
export const REGION = "us-west-2"; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: "TrackingAndGeofencingSampleMapHere", // REQUIRED - Amazon Location Service map resource name
  STYLE: "VectorHereExplore", // REQUIRED - String representing the style of map resource
};

export const GEOFENCE = "TrackingAndGeofencingSampleCollection"; // REQUIRED - Amazon Location Service geofence collection resource name

export const TRACKER = "SampleTracker"; // REQUIRED - Amazon Location Service tracker resource name

export const DEVICE_POSITION_HISTORY_OFFSET = 3600; // REQUIRED - Relative time range of Device Position History to display in seconds. Default to 1 hour.

export const KINESIS_DATA_STREAM_NAME = "TrackingAndGeofencingSampleKinesisDataStream"; // REQUIRED for running the demo - defined in ./cfn_template/kinesisResources.yml
