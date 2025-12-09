Automations

You can view your automations and their stats
#
List all automations

If you want to get all of your automations use this GET request

GET https://connect.mailerlite.com/api/automations

#
Request parameters
Parameter	Type	Required	Limitations
filter[enabled]	boolean	no	Must be one of the following: true (for active) and false (for inactive). Defaults to return all automations
filter[name]	string	no	Must be a string
filter[group]	string	no	Must be a valid group id. Returns all automations that use the group in their trigger configuration
page	integer	no	Defaults to 1
limit	integer	no	Defaults to 10
#
Response

Response code: 200 OK

{
  "data": [
    {
      "id": "57444257882965766",
      "name": "Automation 1",
      "enabled": false,
      "trigger_data": {
        "track_ecommerce": false,
        "repeatable": false,
        "valid": true,
      },
      "steps": [
        {
          "id": "57444257892403137",
          "type": "delay",
          "parent_id": null,
          "unit": "minutes",
          "complete": true,
          "created_at": "2022-06-09 13:58:33",
          "updated_at": "2022-06-09 13:58:33",
          "value": "5",
          "description": "Wait for 5 minutes"
        },
        {
          "id": "57444261587584962",
          "type": "email",
          "parent_id": "57444257892403137",
          "name": "mail",
          "subject": "mail {$name}",
          "from": "dummy@mailerlite.io",
          "from_name": "Dummy Testerson",
          "email_id": "57444261557176071",
          "email": {
            "id": "57444261557176071",
            "account_id": "1",
            "emailable_id": "57444257882965766",
            "emailable_type": "automations",
            "type": "builder",
            "from": "dummy@mailerlite.io",
            "from_name": "Dummy Testerson",
            "name": "mail",
            "subject": "mail {$name}",
            "plain_text": null,
            "screenshot_url": null,
            "preview_url": null,
            "created_at": "2022-06-09 13:58:36",
            "updated_at": "2022-06-09 13:58:42",
            "is_designed": true,
            "language_id": 4,
            "is_winner": false,
            "stats": {
              "sent": 0,
              "opens_count": 0,
              "unique_opens_count": 0,
              "open_rate": {
                "float": 0,
                "string": "0%"
              },
              "clicks_count": 0,
              "unique_clicks_count": 0,
              "click_rate": {
                "float": 0,
                "string": "0%"
              },
              "unsubscribes_count": 0,
              "unsubscribe_rate": {
                "float": 0,
                "string": "0%"
              },
              "spam_count": 0,
              "spam_rate": {
                "float": 0,
                "string": "0%"
              },
              "hard_bounces_count": 0,
              "hard_bounce_rate": {
                "float": 0,
                "string": "0%"
              },
              "soft_bounces_count": 0,
              "soft_bounce_rate": {
                "float": 0,
                "string": "0%"
              },
              "forwards_count": 0
            },
            "send_after": null,
            "track_opens": true
          },
          "language_id": 4,
          "complete": true,
          "created_at": "2022-06-09 13:58:36",
          "updated_at": "2022-06-09 13:58:36",
          "track_opens": true,
          "google_analytics": null,
          "tracking_was_disabled": false,
          "description": "Send \"mail {$name}\" email"
        }
      ],
      "triggers": [
        {
          "id": "80916950725690939",
          "type": "subscriber_joins_group",
          "group_ids": [
            "80916981736277582"
          ],
          "groups": [
            {
              "id": "80916981736277582",
              "name": "My Group",
              "url": null
            }
          ],
          "exclude_group_ids": [],
          "excluded_groups": [],
          "broken": false
        }
      ],
      "complete": true,
      "broken": false,
      "warnings": [],
      "emails_count": 1,
      "first_email_screenshot_url": null,
      "stats": {
        "completed_subscribers_count": 0,
        "subscribers_in_queue_count": 0,
        "bounce_rate": {
          "float": 0,
          "string": "0%"
        },
        "click_to_open_rate": {
          "float": 0,
          "string": "0%"
        },
        "sent": 0,
        "opens_count": 0,
        "unique_opens_count": null,
        "open_rate": {
          "float": 0,
          "string": "0%"
        },
        "clicks_count": 0,
        "unique_clicks_count": null,
        "click_rate": {
          "float": 0,
          "string": "0%"
        },
        "unsubscribes_count": 0,
        "unsubscribe_rate": {
          "float": 0,
          "string": "0%"
        },
        "spam_count": 0,
        "spam_rate": {
          "float": 0,
          "string": "0%"
        },
        "hard_bounces_count": 0,
        "hard_bounce_rate": {
          "float": 0,
          "string": "0%"
        },
        "soft_bounces_count": 0,
        "soft_bounce_rate": {
          "float": 0,
          "string": "0%"
        }
      },
      "created_at": "2022-06-09 13:58:33",
      "has_banned_content": false,
      "qualified_subscribers_count": 63
    }
  ],
  "links": {
    "first": "https://connect.mailerlite.com/api/automations?page=1",
    "last": "https://connect.mailerlite.com/api/automations?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://connect.mailerlite.com/api/automations?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://connect.mailerlite.com/api/automations",
    "per_page": 10,
    "to": 1,
    "total": 1
  },
  "aggregations": {
    "sum": 24
  }
}

#
Get an automation

If you want to fetch a specific automation you can use this GET endpoint

GET https://connect.mailerlite.com/api/automations/{automation_id}

#
Response

Response code: 200 OK

{
  "data": {
    "id": "57444257882965766",
    "name": "Automation 1",
    "enabled": false,
    "trigger_data": {
      "track_ecommerce": false,
      "repeatable": false,
      "valid": true
    },
    "steps": [
      {
        "id": "57444257892403137",
        "type": "delay",
        "parent_id": null,
        "unit": "minutes",
        "complete": true,
        "created_at": "2022-06-09 13:58:33",
        "updated_at": "2022-06-09 13:58:33",
        "value": "5",
        "description": "Wait for 5 minutes"
      },
      {
        "id": "57444261587584962",
        "type": "email",
        "parent_id": "57444257892403137",
        "name": "mail",
        "subject": "mail {$name}",
        "from": "dummy@mailerlite.io",
        "from_name": "Dummy Testerson",
        "email_id": "57444261557176071",
        "email": {
          "id": "57444261557176071",
          "account_id": "1",
          "emailable_id": "57444257882965766",
          "emailable_type": "automations",
          "type": "builder",
          "from": "dummy@mailerlite.io",
          "from_name": "Dummy Testerson",
          "name": "mail",
          "subject": "mail {$name}",
          "plain_text": null,
          "screenshot_url": null,
          "preview_url": null,
          "created_at": "2022-06-09 13:58:36",
          "updated_at": "2022-06-09 13:58:42",
          "is_designed": true,
          "language_id": 4,
          "is_winner": false,
          "stats": {
            "sent": 0,
            "opens_count": 0,
            "unique_opens_count": 0,
            "open_rate": {
              "float": 0,
              "string": "0%"
            },
            "clicks_count": 0,
            "unique_clicks_count": 0,
            "click_rate": {
              "float": 0,
              "string": "0%"
            },
            "unsubscribes_count": 0,
            "unsubscribe_rate": {
              "float": 0,
              "string": "0%"
            },
            "spam_count": 0,
            "spam_rate": {
              "float": 0,
              "string": "0%"
            },
            "hard_bounces_count": 0,
            "hard_bounce_rate": {
              "float": 0,
              "string": "0%"
            },
            "soft_bounces_count": 0,
            "soft_bounce_rate": {
              "float": 0,
              "string": "0%"
            },
            "forwards_count": 0
          },
          "send_after": null,
          "track_opens": true
        },
        "language_id": 4,
        "complete": true,
        "created_at": "2022-06-09 13:58:36",
        "updated_at": "2022-06-09 13:58:36",
        "track_opens": true,
        "google_analytics": null,
        "tracking_was_disabled": false,
        "description": "Send \"mail {$name}\" email"
      }
    ],
    "triggers": [
      {
        "id": "80916950725690939",
        "type": "subscriber_joins_group",
        "group_ids": [
          "80916981736277582"
        ],
        "groups": [
          {
            "id": "80916981736277582",
            "name": "My Group",
            "url": null
          }
        ],
        "exclude_group_ids": [],
        "excluded_groups": [],
        "broken": false
      }
    ],
    "complete": true,
    "broken": false,
    "warnings": [],
    "emails_count": 1,
    "first_email_screenshot_url": null,
    "stats": {
      "completed_subscribers_count": 0,
      "subscribers_in_queue_count": 0,
      "bounce_rate": {
        "float": 0,
        "string": "0%"
      },
      "click_to_open_rate": {
        "float": 0,
        "string": "0%"
      },
      "sent": 0,
      "opens_count": 0,
      "unique_opens_count": null,
      "open_rate": {
        "float": 0,
        "string": "0%"
      },
      "clicks_count": 0,
      "unique_clicks_count": null,
      "click_rate": {
        "float": 0,
        "string": "0%"
      },
      "unsubscribes_count": 0,
      "unsubscribe_rate": {
        "float": 0,
        "string": "0%"
      },
      "spam_count": 0,
      "spam_rate": {
        "float": 0,
        "string": "0%"
      },
      "hard_bounces_count": 0,
      "hard_bounce_rate": {
        "float": 0,
        "string": "0%"
      },
      "soft_bounces_count": 0,
      "soft_bounce_rate": {
        "float": 0,
        "string": "0%"
      }
    },
    "created_at": "2022-06-09 13:58:33",
    "has_banned_content": false,
    "qualified_subscribers_count": 63
  }
}

#
Error

When providing an invalid automation id

Response code: 404 Not Found

#
Get the subscriber activity for an automation

If you want to fetch the subscriber activity for an automation use this GET request

GET https://connect.mailerlite.com/api/automations/{automation_id}/activity

#
Request parameters
Parameter	Type	Required	Limitations
filter[status]	string	yes	Must be one of the following: completed, active, canceled, failed
filter[date_from]	date	no	Must be in the format Y-m-d. Relevant for statuses: completed, canceled, failed
filter[date_to]	date	no	Must be in the format Y-m-d. Relevant for statuses: completed, canceled, failed
filter[scheduled_from]	date	no	Must be in the format Y-m-d. Relevant for active status
filter[scheduled_to]	date	no	Must be in the format Y-m-d. Relevant for active status
filter[search]	string	no	Must be a subscriber email
page	integer	no	Defaults to 1
limit	integer	no	Defaults to 10
#
Response

Response code: 200 OK

{
  "data": [
    {
      "id": "63060835041281261",
      "status": "Completed",
      "date": "2022-08-10 14:13:08",
      "reason": null,
      "reason_description": "",
      "stepRuns": [
        {
          "id": "63060835092661486",
          "step_id": "63060773780325602",
          "description": "Wait for 10 minutes",
          "scheduled_for": "2022-08-10 14:12:11"
        },
        {
          "id": "63062186887480569",
          "step_id": "61226379035805534",
          "description": "Send \"Hello\" email",
          "scheduled_for": null
        }
      ],
      "nextStep": {
        "id": "76468141616531049",
        "type": "condition",
        "parent_id": "61226379035805534",
        "complete": true,
        "broken": false,
        "yes_step_id": "76468160915572330",
        "no_step_id": null,
        "matching_type": "any",
        "conditions": [
          {
            "type": "custom_fields",
            "field_id": "5",
            "action": "contains",
            "action_value": "unknown",
            "field": {
              "id": "5",
              "name": "City",
              "type": "text"
            }
          }
        ],
        "created_at": "2022-07-21 07:54:02",
        "updated_at": "2022-07-21 07:54:02",
        "description": "Check some condition"
      },
      "currentStep": {
        "id": "61226379035805534",
        "type": "email",
        "parent_id": "63060773780325602",
        "name": "gfg",
        "subject": "gfg",
        "from": "dummy@mailerlite.io",
        "from_name": "Dummy Testerson",
        "email_id": "61226396694873374",
        "email": {
          "id": "61226396694873374",
          "account_id": "1",
          "emailable_id": "61041127433700472",
          "emailable_type": "automations",
          "type": "builder",
          "from": "dummy@mailerlite.io",
          "from_name": "Dummy Testerson",
          "name": "Hello",
          "subject": "Hello",
          "plain_text": null,
          "screenshot_url": null,
          "preview_url": null,
          "created_at": "2022-07-21 07:54:02",
          "updated_at": "2022-08-10 14:13:08",
          "is_designed": true,
          "language_id": 4,
          "is_winner": false,
          "stats": {
            "sent": 3,
            "opens_count": 0,
            "unique_opens_count": 0,
            "open_rate": {
              "float": 0,
              "string": "0%"
            },
            "clicks_count": 0,
            "unique_clicks_count": 0,
            "click_rate": {
              "float": 0,
              "string": "0%"
            },
            "unsubscribes_count": 0,
            "unsubscribe_rate": {
              "float": 0,
              "string": "0%"
            },
            "spam_count": 0,
            "spam_rate": {
              "float": 0,
              "string": "0%"
            },
            "hard_bounces_count": 0,
            "hard_bounce_rate": {
              "float": 0,
              "string": "0%"
            },
            "soft_bounces_count": 0,
            "soft_bounce_rate": {
              "float": 0,
              "string": "0%"
            },
            "forwards_count": 0
          },
          "send_after": null,
          "track_opens": true
        },
        "language_id": 4,
        "complete": true,
        "created_at": "2022-07-21 07:53:45",
        "updated_at": "2022-08-10 13:50:40",
        "track_opens": true,
        "google_analytics": null,
        "tracking_was_disabled": false,
        "description": "Send \"gfg\" email"
      }
    }
  ],
  "links": {
    "first": "https://connect.mailerlite.com/api/automations/{automation_id}/activity?page=1",
    "last": "https://connect.mailerlite.com/api/automations/{automation_id}/activity?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://connect.mailerlite.com/api/automations/{automation_id}/activity?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://connect.mailerlite.com/api/automations/{automation_id}/activity",
    "per_page": 10,
    "to": 3,
    "total": 3
  }
}

#
Error

When providing an invalid automation id

Response code: 404 Not Found

#
Create draft automation

If you want to create draft automations use this POST request

POST https://connect.mailerlite.com/api/automations

#
Request parameters
Parameter	Type	Required	Limitations
name	string	yes	Must be a string
#
Response

Response code: 201 Created

{
  "data": {
    "id": "100000000000000000",
    "name": "Created_automation",
    "enabled": false,
    "trigger_data": {
      "track_ecommerce": false
    },
    "warnings": [],
    "stats": {
      "completed_subscribers_count": 0,
      "subscribers_in_queue_count": 0,
      "bounce_rate": {
        "float": 0,
        "string": "0%"
      },
      "click_to_open_rate": {
        "float": 0,
        "string": "0%"
      },
      "sent": null,
      "opens_count": null,
      "unique_opens_count": null,
      "open_rate": {
        "float": 0,
        "string": "0%"
      },
      "clicks_count": null,
      "unique_clicks_count": null,
      "click_rate": {
        "float": 0,
        "string": "0%"
      },
      "unsubscribes_count": null,
      "unsubscribe_rate": {
        "float": 0,
        "string": "0%"
      },
      "spam_count": null,
      "spam_rate": {
        "float": 0,
        "string": "0%"
      },
      "hard_bounces_count": null,
      "hard_bounce_rate": {
        "float": 0,
        "string": "0%"
      },
      "soft_bounces_count": null,
      "soft_bounce_rate": {
        "float": 0,
        "string": "0%"
      },
      "forward_rate": {
        "float": 0,
        "string": "0%"
      },
      "social_interactions_count": null,
      "social_interaction_rate": {
        "float": 0,
        "string": "0%"
      }
    },
    "created_at": "2024-08-01 00:00:00",
    "has_banned_content": false,
    "steps": []
  }
}

#
Delete automation

If you want to delete automation use this DELETE request

DELETE https://connect.mailerlite.com/api/automations/{automation_id}

#
Response

Response code: 204 No Content
