//
//  Event.swift
//  FOMO_V2
//
//  Created by Samuel Kyu-Seo Lee on 12/25/18.
//  Copyright © 2018 Samuel Kyu-Seo Lee. All rights reserved.
//

import UIKit

class Event: NSObject {
    
    var title: String?
    var descript: String?
    var date: String?
    var time: String?
    var building: String?
    var address: String?
    var thumbNailImageName: String?
    
    var channel: Channel? 
}

class Channel: NSObject {
    var name: String?
    var profileImageName: String?
}
