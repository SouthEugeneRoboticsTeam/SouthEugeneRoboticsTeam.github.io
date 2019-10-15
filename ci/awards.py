import json
import yaml
import requests
import os

r = requests.get(
  'https://www.thebluealliance.com/api/v3/team/frc2521/awards',
  headers={'X-TBA-Auth-Key': os.getenv('tba_api_key')}
)

awards = [{
  'name': a['name'].split(' sponsored by')[0],
  'event': a['event_key'],
  'year': a['year']
} for a in r.json()]

print(yaml.dump(awards).strip())
