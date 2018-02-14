import cv2
#from matplotlib import pyplot as plt
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("IP")
parser.add_argument("MODE")
args = parser.parse_args()
if args.MODE == 'MOBILE':
    link = 'http://'+ args.IP + ':8080/video'
elif args.MODE == 'PI':
    link = 'http://' + args.IP + ':80/html/cam_pic.php'





while(True):
    # Capture frame-by-frame
    cap = cv2.VideoCapture(link)
    ret, frame = cap.read()

    # Our operations on the frame come here
    #gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Display the resulting frame
    cv2.imshow('frame',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
