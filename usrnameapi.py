from flask import jsonify
from flask_restful import Api, Resource, reqparse

apikey = ''
with open('apikey.txt', 'r') as f:
  apikey = f.read();
    

def getSites(username):
  # TODO implement search api
  print(username)
  sites = ['Facebook.com', 'Twitter.com', 'Spotify.com', 'Reddit.com', 'Instagram.com', 'Youtube.com', 'Twitch.tv', 'Tiktok.com', 'Pinterest.com', 'Linkedin.com']
  return sites




class UsernameApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Username Api Handler"
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('type', type=str)
    parser.add_argument('username', type=str)

    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = args['type']
    request_json = args['username']
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    #ret_status = request_type
    #ret_msg = request_json

    """ if ret_msg:
      message = "Your Message Requested: {}".format(ret_msg)
    else:
      message = "No Msg" """
    arraystuff = getSites(request_json)
    final_ret = {'result': arraystuff}
    print(final_ret)
    return final_ret