#!/bin/bash
#intel-undervolt settings do not seem to persist after a reboot.
#This script runs "intel-undervolt apply" to the start of the system.

sudo intel-undervolt apply
